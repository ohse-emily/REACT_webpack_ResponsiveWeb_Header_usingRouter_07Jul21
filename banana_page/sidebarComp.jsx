import React, { Component } from 'react'

function SidebarComp() {
    return (
        <>
            <div className="banana_sidebar_subject">
                <h1>상담신청</h1>
            </div>
            <div>
                <ul className="banana_sidebar_content">
                    <li>상담게시판</li>
                    <li>지원하기</li>
                    <li>자주묻는질문</li>
                </ul>
            </div>
        </>
    )
}

export default SidebarComp