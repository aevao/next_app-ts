
interface props {
    title: string ;
}

const ProfilePage:React.FC<props>  = (props) => {
    return <div>
        <h1>{props.title} second</h1>
    </div>
}
export default ProfilePage 
