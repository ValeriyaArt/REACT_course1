import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return <div>
        <div>
            <img width='100%'
                 src='https://img51994.vremya.tv/img/2015-10-12/fmt_96_24_sohrani-moyu-rech-navsegda-2618614.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <div>
                <h1>{props.profile.fullName}</h1>
                <ProfileStatusWithHooks status={props.status}
                               updateStatus={props.updateStatus}
                />
            </div>
        </div>
    </div>
}

export default ProfileInfo;