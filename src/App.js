import logo from './logo.svg';
import './App.css';

const App=()=> {

  const categories=[
    {
      id:1,
      title:'Hats',
     
    },
    {
      id:2,
      title:'Jackets',
     
    },
    {
      id:1,
      title:'Sneakers',
     
    },
    {
      id:1,
      title:'Womens',
     
    },
    {
      id:1,
      title:'Mens',
     
    }
  ]


  return (
    <div className='categories-container'>
      {categories.map(({title})=>(
 <div className='category-container'>
    <div className="background-image"></div>
 <div className='category-body-container'>
     <h2>{title}</h2>
     <p>Shop Now</p>
 </div>
</div>
      ))}
{/*      
      <div className='category-container'>
          <div className='category-body-container'>
              <h2>Jackets</h2>
              <p>Shop Now</p>
          </div>
      </div>
      <div className='category-container'>
          <div className='category-body-container'>
              <h2>Sneakers</h2>
              <p>Shop Now</p>
          </div>
      </div>
      <div className='category-container'>
   
          <div className='category-body-container'>
              <h2>womens</h2>
              <p>Shop Now</p>
          </div>
      </div>
      <div className='category-container'>
          <div className='category-body-container'>
              <h2>Mens</h2>
              <p>Shop Now</p>
          </div>
      </div> */}
    </div>
  );
}

export default App;
