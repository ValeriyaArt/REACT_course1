import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return <div>
        <div>
            <img width='100%'
                 src='https://img51994.vremya.tv/img/2015-10-12/fmt_96_24_sohrani-moyu-rech-navsegda-2618614.jpg'></img>
        </div>
        <div className={s.descriptionBlock}>
            <img width='30%'
                 src='https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg'></img>
            user prof
        </div>
    </div>
}

export default ProfileInfo;