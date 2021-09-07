function Sidebar(props) {
    function handleCategoryClick(idx) {
      props.updateCategoryIdx(idx);
    }
  
    let sidebarCardsJsx = props.categoryNames.map((name, idx) => {
      return (
        <li 
          key={idx} 
          className="sidebar-card" 
          onClick={() => handleCategoryClick(idx)}
        >
          { name }
        </li>
      )
    })
  
    return (
      <aside className="sidebar">
        <ul>
          { sidebarCardsJsx }
        </ul>
      </aside>
    );
  }
  
  export default Sidebar;
  