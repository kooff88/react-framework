import React, { useState, useRef, useEffect, useCallback } from 'react';

function Listener(){
    // state 用来存储鼠标的坐标
    const [ coords, setCoords ] = useState({ x:0, y:0 })

    // 使用 useCallback的事件处理程序，这样引用就不会更改
    const handler = useCallback(
        (e) => {
            console.log('e',e)
            // 更新坐标
            setCoords({ x: e.clientX, y: e.clientY })
        }
    )

    // 使用我们自己的hooks添加事件监听，
    useEventListener('mousemove', handler);


    return (
        <h1>
            the mouse position is ({coords.x}, {coords.y})
        </h1>
    )

}

// 自定义hooks编写
function useEventListener(eventName, handler,element = window){
    // 创建一个ref 来存储处理程序
    const saveHandler = useRef()

    // 如果handler变化了，就更新ref.current的值。
    // 这个让我们下面的effect 永远获取最新的handler

    useEffect(() => {
        saveHandler.current = handler;
    }, [handler]);

    useEffect(
        () => {
            // 确保元素支持 addEventListener
            const isSupported = element && element.addEventListener;
            if (!isSupported) return;

            // 创建事件监听调用存储在 ref 的处理方法
            const eventListener = event => saveHandler.current(event);

            // 添加事件监听
            element.addEventListener(eventName, eventListener);

            // 清除的时候移除事件监听
            return () => {
                element.removeEventListener(eventName,eventListener)
            }
        },
        [eventName, element] // 如果eventName 或 element 变化，就再次运行。
    )
}

export default Listener;
