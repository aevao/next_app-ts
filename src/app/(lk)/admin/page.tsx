import type {Metadata} from 'next'


export default function AdminPage() {
    const test = 'asdf'
     const handleClick = () => {
        console.log(test)
     } 
    return <div > Admin </div>
}