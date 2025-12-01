import ProductCard from "./components/ProductCard";

const allroutes = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<ProductCard/>} />
      </Routes>
    </div>
  )
}

export default allroutes