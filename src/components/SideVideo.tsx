"use client";
import React from 'react'
import Image from 'next/image';

const SideVideo = () => {
  return (
    <div>
        <div className="aside-block">
            <h3 className="aside-title">Video</h3>
                <div className="video-post">
                    <a
                        target='_blank'
                        href="https://www.youtube.com/watch?v=Kes2fk-Nuwo&ab_channel=GordonRamsay"
                        className='link-video'>
                            <span className="bi-play-fill"></span>
                                <Image
                                    height={100} width={100}
                                    src='/assets/photo3.jpg'
                                    alt="photo_video_recipe"
                                    className='img-fluid'
                                />
                          </a>
                      </div>
                  </div>
    </div>
  )
}

export default SideVideo