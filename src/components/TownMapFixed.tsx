"use client"

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { calcKeyVoteWinCity } from '../utility/city';

interface GeoJSONProperties {
  COUNTYCODE: string;
  COUNTYNAME: string;
  COUNTYENG: string;
}


interface GeoJSON {
  type: 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon';
  features: GeoJSONFeature[];
}

interface GeoJSONFeature {
  type: 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon';
  properties: GeoJSONProperties;
  geometry: GeoJSONGeometry;
}
interface GeoJSONGeometry {
  type: string;
  coordinates: number[][][] | number[][][][];
}
function calcScale() {
  // let mercatorScale, w = window.screen.width;
  // if (w > 1366) { mercatorScale = 11000; }
  // else if (w <= 1366 && w > 480) { mercatorScale = 9000; }
  // else { mercatorScale = 6000; }
  let mercatorScale = 5000;
  return mercatorScale;
}


export default function TownMapFixed({ year, reverse, mapPath, area }: { year: string, reverse: boolean, mapPath: string, area?: string }) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const hasFetchedData = useRef(false); // 新增一個 ref 來追蹤是否已經獲取過數據

  let mercatorScale = calcScale();

  if (area) {
    mercatorScale = 12000;
  }

  useEffect(() => {
    const width = (mapRef.current)?.offsetWidth || 0;
    console.log("🚀 ~ file: TaiwanMapFixed.tsx:35 ~ useEffect ~ width:", width)
    const height = (mapRef.current)?.offsetHeight || 0;
    const res = calcKeyVoteWinCity(year);
    if (!hasFetchedData.current) { // 只有在尚未獲取數據的情況下執行

      const svg = d3
        .select(mapRef.current)
        .append('svg')
        .attr('id', 'svg')
        // .attr('viewBox', `0 0 ${width} ${height}`);
        .attr('viewBox', `0 0 ${width} ${height}`);


      const projection = d3.geoMercator()
        .center([121, 24])
        .scale(mercatorScale)
        .translate([width / 2, height / 2.5])


      const pathGenerator = d3.geoPath().projection(projection);
      hasFetchedData.current = true;
      fetch(mapPath)
        .then(response => response.json())
        .then(data => {
          const alltaiwanGeoJSON: GeoJSON = area
            ? { type: data.type, features: data.features.filter((d: GeoJSONFeature) => [area].includes(d.properties.COUNTYNAME)) }
            : { type: data.type, features: data.features };

          const taiwanGeoJSON: GeoJSONFeature[] = area
            ? data.features.filter((d: { properties: { COUNTYNAME: string; }; }) => [area].includes(d.properties.COUNTYNAME))
            : data.features;


          if (reverse) {
            taiwanGeoJSON.forEach(feature => {
              feature.geometry.coordinates.reverse(); // 使用 reverse 在第一层级上反转
              if (Array.isArray(feature.geometry.coordinates[0])) { //  // 如果有第二层级，同样在第二层级上使用 reverse
                feature.geometry.coordinates.forEach(subArray => {
                  subArray.reverse();
                });
              }
            });
          }
          let xOffset = 0;
          let yOffset = 0;

          if (area) {
            //找出圖型的邊界經緯度


            const bounds = d3.geoPath().bounds(alltaiwanGeoJSON as d3.GeoPermissibleObjects);


            const [minX, minY] = projection(bounds[0]) || [0, 0];
            const [maxX, maxY] = projection(bounds[1]) || [0, 0];
            const areaWidth = maxX - minX;  //可以計算出大小
            const areaHeight = maxY - minY;
            const areaPercent = areaWidth / width;
            console.log("🚀 ~ file: TaiwanMap.tsx:91 ~ useEffect ~ areaPercent:", areaPercent)

            // 計算圖形經緯度的中心點
            const centerX = (bounds[0][0] + bounds[1][0]) / 2;  //121
            const centerY = (bounds[0][1] + bounds[1][1]) / 2;
            const hcenter = 121
            const wcenter = 24
            //使用 D3 的地理投影 (projection) 將地理坐標轉換為屏幕坐標  121－> 250 (svg 寬 500)
            const centerScreenCoordinates = projection([hcenter, wcenter]);
            const mapHCoordinates = projection([centerX, centerY]);
            // 計算圖形到中心點距離 進行位移
            if (centerScreenCoordinates != null && mapHCoordinates != null) {
              xOffset = centerScreenCoordinates[0] - mapHCoordinates[0]
              yOffset = centerScreenCoordinates[1] - mapHCoordinates[1]
            }

          }
          // 定義箭頭
          svg
            .append('defs')
            .append('marker')
            .attr('id', 'arrowhead')
            .attr('refX', 6) // 箭頭相對於端點的水平位移
            .attr('refY', 3) // 箭頭相對於端點的垂直位移
            .attr('markerWidth', 8) // 箭頭寬度
            .attr('markerHeight', 6) // 箭頭高度
            .attr('orient', 'auto') // 根據連接的線段自動調整箭頭方向
            .append('path')
            .attr('d', 'M0,0 L6,3 L0,6') // 箭頭的路徑，這裡使用一個簡單的三角形
          svg
            .selectAll('path')
            .data(taiwanGeoJSON)
            .enter()
            .append('path')
            .attr('transform', `translate(${xOffset}, ${yOffset})`)
            .attr('d', (d: any) => pathGenerator(d.geometry)!)

            .attr('id', (d: any) => 'city' + d.properties.COUNTYCODE)
            .attr('name', (d: any) => 'city' + d.properties.COUNTYNAME)
            // .attr('class', (d: any) => {
            //   const select = res.get(d.properties.COUNTYNAME) || "fill-gray-200";
            //   const color = `fill-${select?.value.winner.color || "gray-200"}`;
            //   return color
            // })
            // .attr('stroke', 'white')
            // .attr('stroke-width', 1)
            // .style('marker-end', 'url(#arrowhead)') // 將箭頭應用到路徑的末端
            .on('click', (event, data) => {
              const keyToFind: string = data.properties.COUNTYNAME; // Ensure keyToFind is of type string
              const vote = res.get(data.properties.COUNTYNAME);
              const color = `fill-${vote?.value.winner.color || "gray-200"}`;
              console.log(color);
              console.log(res.get(keyToFind));
            });
          svg
            .selectAll('text')
            .data(taiwanGeoJSON)

            .enter()
            .append('text')
            .attr('transform', `translate(${xOffset}, ${yOffset})`)
            .attr('x', (d: any) => pathGenerator.centroid(d.geometry)[0])
            .attr('y', (d: any) => pathGenerator.centroid(d.geometry)[1])
            .text((d: any) => d.properties.TOWNNAME)
            .attr('text-anchor', 'middle')
            .attr('alignment-baseline', 'middle')
            .attr('class', 'text-xs font-inter w-[28px] h-[20px] text-blue-500 ')
            .style("fill", "blue")



        })

        .catch(error => {
          console.error('Error loading GeoJSON data:', error);
        });
      return () => {
        svg.selectAll('path').remove();

      };
    }
  });

  return (
    <>
      <div className=" h-full w-full bg-blue-50 flex justify-center items-center">
        <div ref={mapRef} id="map" className=" h-full w-full flex justify-center items-center overflow-hidden"></div>

      </div>

      {/* <div className="h2 bg-yellow-200">{width}</div>
      <div className="h3"> {height}</div> */}
      {/* <div className="h3"> {mercatorScale}</div> */}
    </>
  );
};


