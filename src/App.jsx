import ThemeContextProvider from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeToggle from './components/ThemeToggle'; 
import AuthContextProvider from './contexts/AuthContext';

function App() {
 

  return (
   <div className="App">
   <AuthContextProvider>
    <ThemeContextProvider>
          <Navbar />
      
  
      <BookList />
      <ThemeToggle />
    </ThemeContextProvider>
 
    </AuthContextProvider>

   </div>
      
    
  )
}

export default App


