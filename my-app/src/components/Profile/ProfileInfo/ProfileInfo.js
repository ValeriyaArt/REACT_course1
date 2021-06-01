import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }
    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    return <div>
        <div>
            <img width='100%'
                 src='https://img51994.vremya.tv/img/2015-10-12/fmt_96_24_sohrani-moyu-rech-navsegda-2618614.jpg'
                 alt={'profile header'}/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt={'profile'}/>
            {isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
            <div>
                <h1>{profile.fullName}</h1>
                <ProfileStatusWithHooks status={status}
                                        updateStatus={updateStatus}
                />
            </div>
        </div>
    </div>
}

export default ProfileInfo;