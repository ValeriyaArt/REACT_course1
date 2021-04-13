import userPhoto from "../../assets/images/user.png";
import styles from "./Users.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {toggleIsFollowing} from "../../redux/users-reducer";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    console.log(props)
    return (

        <div>
            <div>
                {pages.map(p => {
                        return <span className={props.currentPage === p && styles.selectedPage}
                                     onClick={(e) => {
                                         props.onPageChanged(p)
                                     }}>{p}</span>
                    }
                )
                }
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>

                    </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowing(true, u.id)
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "6dec84d3-93af-4b7c-89c5-c65a95791f52"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unfollow(u.id)
                                        }
                                        props.toggleIsFollowing(false, u.id)

                                    })

                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleIsFollowing(true, u.id)

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "6dec84d3-93af-4b7c-89c5-c65a95791f52"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                        props.toggleIsFollowing(false, u.id)

                                    })

                            }}>Follow</button>
                        }
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.city'}</div>
                        <div>{'u.location.country'}</div>
                    </span>
                </span>
                    </div>
                )
            }
        </div>)
}

export default Users;
