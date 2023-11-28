"use client"

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { calcKeyVoteWinCity } from '../utility/city';
interface GeoJSONProperties {
  COUNTYCODE: string;
  COUNTYNAME: string;
  COUNTYENG: string;
}

interface GeoJSONGeometry {
  type: string;
  coordinates: number[][][] | number[][][][];
}

interface GeoJSONFeature {
  properties: GeoJSONProperties;
  geometry: GeoJSONGeometry;
}

function calcScale() {
  let mercatorScale, w = window.screen.width;
  if (w > 1366) { mercatorScale = 11000; }
  else if (w <= 1366 && w > 480) { mercatorScale = 9000; }
  else { mercatorScale = 6000; }
  // mercatorScale = 1000;
  return mercatorScale;
}


export default function TaiwanMapFixedOne({ year, reverse }: { year: string, reverse: boolean }) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const hasFetchedData = useRef(false); // 新增一個 ref 來追蹤是否已經獲取過數據

  let mercatorScale = calcScale();
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
        .attr('viewBox', `0 0 ${width} ${height}`);


      const projection = d3.geoMercator()
        .center([121, 24])
        .scale(mercatorScale)
        .translate([width / 2, height / 2.5])


      const pathGenerator = d3.geoPath().projection(projection);
      hasFetchedData.current = true;
      fetch("/files/COUNTY_one.geojson")
        .then(response => response.json())
        .then(data => {
          const taiwanGeoJSON: GeoJSONFeature[] = data.features;
          console.log("🚀 ~ file: TaiwanMapFixedOne.tsx:63 ~ useEffect ~ taiwanGeoJSON:", taiwanGeoJSON)
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


          svg
            .selectAll('path')
            .data(taiwanGeoJSON)
            .enter()
            .append('path')
            .attr('d', (d: any) => pathGenerator(d.geometry)!)
            .attr('fill-rule', 'nonzero') // 或者 .attr('fill-rule', 'nonzero'); evenodd
            .attr('id', (d: any) => 'city' + d.properties.COUNTYCODE)
            .attr('name', (d: any) => 'city' + d.properties.COUNTYNAME)
            // .attr('class', (d: any) => {
            //   const select = res.get(d.properties.COUNTYNAME);
            //   const color = `fill-${select?.value.winner.color || "gray-200"}`;
            //   return color
            // })
            .attr('class', "fill-red-300")
            // .attr('stroke', 'white')
            // .attr('stroke-width', 2)
            .on('click', (event, data) => {
              const keyToFind: string = data.properties.COUNTYNAME; // Ensure keyToFind is of type string
              const vote = res.get(data.properties.COUNTYNAME);
              const color = `fill-${vote?.value.winner.color || "gray-200"}`;
              console.log(color);
              console.log(res.get(keyToFind));
            });
          // svg
          //   .selectAll('text')
          //   .data(taiwanGeoJSON)
          //   .enter()
          //   .append('text')
          //   .attr('x', (d: any) => pathGenerator.centroid(d.geometry)[0])
          //   .attr('y', (d: any) => pathGenerator.centroid(d.geometry)[1])
          //   .text((d: any) => d.properties.COUNTYNAME)
          //   .attr('text-anchor', 'middle')
          //   .attr('alignment-baseline', 'middle')
          //   .attr('class', 'text-base font-bold font-inter w-[28px] h-[20px] outlined-text  text-white')
          //   .style("fill", "white")



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
      <div className=" h-full w-full bg-blue-50 flex justify-center items-center overflow-hidden">
        <div ref={mapRef} id="map" className=" h-full w-full flex justify-center items-center overflow-hidden"></div>

      </div>

      {/* <div className="h2 bg-yellow-200">{width}</div>
      <div className="h3"> {height}</div> */}
      <div className="h3">mercatorScale： {mercatorScale}</div>

    </>
  );
};


