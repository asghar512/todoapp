import React,{useEffect,useState} from "react"
import LinkList from '../components/LinkList';
import LinkForm from '../components/LinkForm';
import 'bootstrap/dist/css/bootstrap.css';

const IndexPage = () => {
    const [links, setLinks] = useState([]);
    const loadLinks = async () => {
        try {
            const res = await fetch('/.netlify/functions/getLinks');
            const links = await res.json();
            setLinks(links);
            console.log(links)
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        loadLinks();
    }, []);
    
  return (
    <div className="container py-5">
    <h1 style={{fontWeight:'bold',textTransform:'uppercase'}} className="text-center mb-5 crud">Build by Muhammad Asghar TODO APP</h1><hr className="hr"/>
     <LinkForm refreshLinks={loadLinks} />
    <LinkList links={links} refreshLinks={loadLinks} />
</div>
  )
}

export default IndexPage
