function App()
  
    {
        return(
          <>
          <BrowserRouter>
          <Routes>
            <Route path="/reg" element={<Reg/>}/>
            <Route path="/h" element={<Home/>}/>
            </Routes>
            </BrowserRouter>
          </>
        )
    }
export default App