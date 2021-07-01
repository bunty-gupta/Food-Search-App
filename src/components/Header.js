import React from "react";


const Header = props => {
    const {search, onInputChange,callSearchApi}= props;

    return (
       <div className="jumbotron py-5" style={{backgroundColor:"#969696;"}}>  
          <h4 className="display-4">
          <span className="material-icons brand-icon">fastfood</span> Food Recipe</h4>
          
            <div class="input-group mb-3  w-50 mx-auto">
              <input 
                 type="text" 
                 class="form-control" 
                 placeholder="Search Recipie"
                 value ={search}
                 onChange ={onInputChange}
                
                 />
              <button class="btn btn-light" onClick={callSearchApi}>Search Recipe</button>
            </div>
        </div>
    );
};

export default Header;