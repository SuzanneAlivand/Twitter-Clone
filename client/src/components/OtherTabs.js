const OtherTabs = ({title, setCurrentTab}) => {
    return ( <div onClick={()=>setCurrentTab(title) }>
        {title}
    </div> );
}
 
export default OtherTabs;