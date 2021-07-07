import React, { Component } from 'react'
import TopComp from '../banana_page/topComp'
import SidebarComp from '../banana_page/sidebarComp'
import ContentComp from '../banana_page/contentComp'
import '.././css/Banana.css'


class Banana extends Component {
    render() {
        return (
            <>
                <div className="banana_wrap">
                    <div className="banana_top_box ">
                        <div className="banana_top center">
                            <div className="banana_top_content">
                                <TopComp />
                            </div>
                        </div>
                    </div>
                    <div className="banana_bottom_box">
                        <div className="banana_bottom center">
                            <div className="banana_sidebar">
                                <SidebarComp />
                            </div>

                            <div className="banana_content_box ">
                                <div className="banana_content">
                                    <div class="banana_content_subject">
                                        <h1>
                                            상담게시판
                                        </h1>
                                    </div>
                                    <div class="banana_content_main">
                                        <ContentComp />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Banana