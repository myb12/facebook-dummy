import React, { useState } from 'react';
import './PostCard.css';
import { MdOutlinePublic } from 'react-icons/md';
import { BsDot, BsCamera } from 'react-icons/bs';
import { FaRegSmile } from 'react-icons/fa';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { RiShareForwardLine, RiArrowDropDownFill, RiChatSmile3Line } from 'react-icons/ri';

const PostCard = ({ post, user }) => {
    const [likeClicked, setLikeCLicked] = useState(false);
    const [likeHovered, setLikeHovered] = useState(false);

    const handleLike = () => {
        setLikeCLicked(!likeClicked);
    }

    const handleLikeHover = (action) => {
        setTimeout(() => {
            if (action === 'over') {
                setLikeHovered(true);
            } else {
                setLikeHovered(false);
            }
        }, 1000)
    }
    return (
        <div className="post-card">
            <div className='d-flex align-items-center'>

                <img className="user-image" src={post?.user?.profile_picture} alt="" />

                <div>
                    <div className="author-name">
                        <span>{post?.user?.name}</span>
                    </div>
                    <div className="time">
                        <p className='mb-0'>{post?.duration}</p>
                        <BsDot className='dot' />
                        <MdOutlinePublic />
                    </div>
                </div>
            </div>

            <p className="status">
                {post?.status}
            </p>

            <div className="comment-reaction">
                <div className="reactions">
                    <img className="like" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" width="18" alt='like' />

                    <img className="heart" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" width="18" alt='heart' />

                    <img className="sad" height="18" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23191A33'/%3e%3cstop offset='87.162%25' stop-color='%233B426A'/%3e%3c/linearGradient%3e%3clinearGradient id='h' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23E78E0D'/%3e%3cstop offset='100%25' stop-color='%23CB6000'/%3e%3c/linearGradient%3e%3clinearGradient id='i' x1='50%25' x2='50%25' y1='81.899%25' y2='17.94%25'%3e%3cstop offset='0%25' stop-color='%2335CAFC'/%3e%3cstop offset='100%25' stop-color='%23007EDB'/%3e%3c/linearGradient%3e%3clinearGradient id='j' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%236AE1FF' stop-opacity='.287'/%3e%3cstop offset='100%25' stop-color='%23A8E3FF' stop-opacity='.799'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cfilter id='g' width='111.4%25' height='137.5%25' x='-5.7%25' y='-18.8%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='.5'/%3e%3cfeOffset in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.0411226772 0 0 0 0 0.0430885485 0 0 0 0 0.0922353316 0 0 0 0.819684222 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3cpath id='f' d='M3.599 8.8c0-.81.509-1.466 1.134-1.466.627 0 1.134.656 1.134 1.466 0 .338-.089.65-.238.898a.492.492 0 01-.301.225c-.14.037-.353.077-.595.077-.243 0-.453-.04-.595-.077a.49.49 0 01-.3-.225 1.741 1.741 0 01-.239-.898zm6.534 0c0-.81.508-1.466 1.133-1.466.627 0 1.134.656 1.134 1.466 0 .338-.089.65-.238.898a.49.49 0 01-.301.225 2.371 2.371 0 01-1.189 0 .49.49 0 01-.301-.225 1.74 1.74 0 01-.238-.898z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M5.333 12.765c0 .137.094.235.25.235.351 0 .836-.625 2.417-.625s2.067.625 2.417.625c.156 0 .25-.098.25-.235C10.667 12.368 9.828 11 8 11c-1.828 0-2.667 1.368-2.667 1.765'/%3e%3cuse fill='url(%23e)' xlink:href='%23f'/%3e%3cuse fill='black' filter='url(%23g)' xlink:href='%23f'/%3e%3cpath fill='%234E506A' d='M4.616 7.986c.128.125.136.372.017.551-.12.178-.32.222-.448.096-.128-.125-.135-.372-.017-.55.12-.179.32-.222.448-.097zm6.489 0c.128.125.136.372.018.551-.12.178-.32.222-.45.096-.127-.125-.134-.372-.015-.55.119-.179.319-.222.447-.097z'/%3e%3cpath fill='url(%23h)' d='M4.157 5.153c.332-.153.596-.219.801-.219.277 0 .451.119.55.306.175.329.096.401-.198.459-1.106.224-2.217.942-2.699 1.39-.301.28-.589-.03-.436-.274.154-.244.774-1.105 1.982-1.662zm6.335.087c.099-.187.273-.306.55-.306.206 0 .469.066.801.219 1.208.557 1.828 1.418 1.981 1.662.153.244-.134.554-.435.274-.483-.448-1.593-1.166-2.7-1.39-.294-.058-.371-.13-.197-.459z'/%3e%3cpath fill='url(%23i)' d='M13.5 16c-.828 0-1.5-.748-1.5-1.671 0-.922.356-1.545.643-2.147.598-1.258.716-1.432.857-1.432.141 0 .259.174.857 1.432.287.602.643 1.225.643 2.147 0 .923-.672 1.671-1.5 1.671'/%3e%3cpath fill='url(%23j)' d='M13.5 13.606c-.328 0-.594-.296-.594-.66 0-.366.141-.613.255-.852.236-.498.283-.566.339-.566.056 0 .103.068.339.566.114.24.255.486.255.851s-.266.661-.594.661'/%3e%3c/g%3e%3c/svg%3e" width="18" alt="sad" />

                    <span className='number-of-reactions'>
                        {post?.likes}
                    </span>
                </div>
                <div className="number-of-comments">
                    <p>{post?.comments?.length} Comments</p>
                </div>
            </div>

            <div className="like-comment-share">
                <div
                    className={`like-icon ${likeClicked || post?.liked ? 'like-clicked' : ''}`}
                    onClick={handleLike}
                    onMouseOver={() => handleLikeHover('over')}
                    onMouseLeave={() => handleLikeHover('leave')}
                >
                    {
                        likeClicked || post?.liked ? <AiFillLike /> : <AiOutlineLike />
                    }
                    <p>Like</p>
                </div>
                <div className="comment-icon">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" strokeLinejoin="round" strokeWidth="32" d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"></path>
                    </svg>
                    <p>Comment</p>
                </div>
                <div className="share-icon">
                    <RiShareForwardLine />
                    <p>Share</p>
                </div>

                <div className={`reaction-icons ${likeHovered ? 'reaction-icons-visible' : ''}`}>
                    <img src="https://i.ibb.co/CVBVrCm/ezgif-com-gif-maker.gif" alt="" />
                </div>
            </div>

            <div className='previous-comments'>
                <p>View 4 previous comments</p>
                <div className="d-flex align-items-center">
                    <p>Most relevant</p>
                    <RiArrowDropDownFill />
                </div>
            </div>

            {
                post?.comments?.map((el, i) => <div key={i} className="comments">
                    <img className="comment-author" src={el?.user?.profile_picture} alt="" />

                    <div>
                        <div className="specific-comment-wrapper">
                            <div className="comment-author-name">
                                <p>{el?.user?.name}</p>
                            </div>
                            <div className="specific-comment">
                                <p>{el?.text}</p>
                            </div>
                        </div>
                        <div className="little-like-reply">
                            <p >Like</p>
                            <p >Reply</p>
                            <span>{el?.duration}</span>
                        </div>
                    </div>
                </div>)
            }

            <div className="write-comment">
                <img className="comment-author" src={user?.profile_picture} alt={user?.name} />

                <form className="w-100">
                    <input className="header-search form-control me-2 border-0 post-status-input write-comment-input" placeholder="Write a comment..." />
                </form>
                <div className='write-comment-icons'>
                    <RiChatSmile3Line className="avatar" />
                    <FaRegSmile className="smile" />
                    <BsCamera className="camera" />
                    <img className="gif" src="https://i.ibb.co/pyVFW6s/gif.png" alt="" />
                    <img className="sticker" src="https://i.ibb.co/QXdZrVd/sticker-1.png" alt="" />
                </div>
            </div>

        </div >
    );
};

export default PostCard;