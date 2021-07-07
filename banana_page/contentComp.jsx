import React, { Component } from 'react'

function ContentComp() {
    return (
        <>
            <div className="banana_content_wrap">
                <div className="banana_content_top_box">
                    <div className="banana_content_top_subject">
                        <h3>개인정보취급방침</h3>
                    </div>
                    <div className="banana_content_top_input">
                        <input type="text" />
                    </div>
                    <div className="banana_content_top_radio">
                        <input type="radio" /><span>동의하지않습니다.</span>
                        <input type="radio" /><span>동의합니다.</span>
                    </div>
                </div>
                <div className="banana_content_bottom_box">
                    <div className="banana_content_bottom_subject">
                        <h3>상담정보</h3>
                    </div>
                    <div className="banana_content_bottom_bigbox">

                        
                        <div>
                            <ul className="banana_content_bottom_1 banana_content_bottom_1_top">
                                <li className="banana_content_left">
                                    이름 *
                                </li>
                                <li className="banana_content_right">
                                    <input type="text" />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="banana_content_bottom_1">
                                <li className="banana_content_left">
                                    성별 *
                                </li>
                                <li className="banana_content_right banana_content_radio">
                                    <input type="radio" /><span>남</span>
                                    <input type="radio" /><span>여</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="banana_content_bottom_1">
                                <li className="banana_content_left">
                                    나이 *
                                </li>
                                <li className="banana_content_right">
                                    <input type="text" /> 세
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="banana_content_bottom_1">
                                <li className="banana_content_left">
                                    이메일 *
                                </li>
                                <li className="banana_content_right">
                                    <input type="text" />@<input type="text"/>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="banana_content_bottom_1">
                                <li className="banana_content_left">
                                    전화번호 *
                                </li>
                                <li className="banana_content_right">
                                    <input type="text" />-<input type="text"/>-<input type="text"/>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="banana_content_bottom_1 banana_content_bottom_last">
                                <li className="banana_content_left">
                                    상담내용
                                </li>
                                <li className="banana_content_right consult">
                                    <input type="text" />
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
                <div className="banana_content_bottom_btn">
                    <button>상담신청하기</button>
                    <button>취소</button>
                </div>
            </div>
        </>
    )
}

export default ContentComp