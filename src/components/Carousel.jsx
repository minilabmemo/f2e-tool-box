import React, {useState, useEffect, useRef} from 'react';
import styles from './index.module.css';

//https://cloud.tencent.com/developer/article/2134761 学用 Hooks 写 React 组件——基础版移动端无缝轮播图组件 is ok
const Carousel = ({children, selectedIndex = 1}) => {
  // 当切换的时候，改变的就是当前位置状态
  // 所以定义当前位置，可以通过传入的 selectedIndex 来控制最开始显示第几个轮播图，默认从 1 开始
  const [active, setActive] = useState(selectedIndex);
  const [status, setStatus] = useState(1);
  // 获取包裹容器
  const container = useRef(null);
  // 获取当前可视区容器宽度
  let SCREEN_WIDTH = "1000"

  // 统一处理，当 active 发生变化的时候，我们需要做的就是切换轮播图到某个位置，转场通过控制包裹容器的 transform 来进行切换，对 transform 的控制封装成 setTransition 函数
  useEffect(() => {


    setTransition();
  }, [active]);

  const setTransition = (offset = 0) => {

    function transitionend() {

      console.log("active:", active)
      // 动画结束后就关闭动画
      container.current.style.transitionProperty = 'none';
      // 恢复状态为 1 静止
      setStatus(1);
      // 当前位置在补位的位置时马上切换到本该在的位置
      if (active === 0) {
        // 使用 setTimeout 包裹，避免 transitionProperty 动画未关闭就切换的闪频
        setTimeout(() => {
          setActive(children.length);
        }, 0)
      }
      if (active === children.length + 1) {
        setTimeout(() => {
          setActive(1);
        }, 0)
      }
      container.current.removeEventListener('transitionend', transitionend, false);
    }
    container.current.addEventListener('transitionend', transitionend, false);

    const distance = (1 - active) * SCREEN_WIDTH;

    container.current.style.transform = `translate3d(${distance + offset}px,0,0)`;

  }
  const handleChangeActive = (number) => {
    // 当在动画进行时，不允许切换
    if (status === 2) return;
    // 切换前先把动画参数打开
    container.current.style.transitionProperty = 'all';
    // 修改状态为进行时
    setStatus(2);
    // 改变当前位置
    setActive(number);
  }
  // 为了演示是否成功，添加两个按钮来切换
  // 上一页
  const handlePrev = () => {
    // // 对临界值进行处理
    // setActive(active === 1 ? children.length : active - 1)
    handleChangeActive(active === 0 ? children.length : active - 1);
  }

  // 下一页
  const handleNext = () => {
    // 对临界值进行处理
    // setActive(active === children.length ? 1 : active + 1);
    handleChangeActive(active === children.length + 1 ? 1 : active + 1);
  }

  return (
    <div className={styles.carousel}>
      <div
        ref={container}
        className={styles.container}>
        {
          React.Children.map(children, (child, index) => {

            // 当轮播图处于第一个时，最后一个组件时，提取到最前面去
            if (active <= 1 && index + 1 === children.length) {
              return (
                <div style={{left: -1 * SCREEN_WIDTH}} className={styles.items}>{child}</div>
              )
            }
            // 当轮播图处于最后一个时，第一个组件提取到最后面
            if (active >= children.length && index === 0) {
              return (
                <div style={{left: children.length * SCREEN_WIDTH}} className={styles.item}>{child}</div>
              )
            }
            return (
              <div
                style={{left: index * SCREEN_WIDTH}}
                className={styles.items}>{child}</div>
            )
          })
        }
      </div>
      <div>
        <div onClick={handlePrev} className={styles.buttonLeft}>Left</div>
        <div onClick={handleNext} className={styles.buttonRight}>Right</div>
      </div>
    </div>
  )
}

export default Carousel;