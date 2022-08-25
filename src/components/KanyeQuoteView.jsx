import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes } from "../store/quotes";

export default function KanyeQuoteView() {
  // useSelector(state => console.log(state.quotes))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuotes())
  }, [dispatch])
  return (
    <section style={{ textAlign: "center" }}>
      <img
        src="https://images.businessoffashion.com/profiles/asset/1797/43897e2e4a6d155d72dd9df352017b546ef9e229.jpeg"
        alt="W3Schools.com"
        style={{ width: "300px" }}
      />
      <h1 style={{ fontSize: "40px", marginTop: "10px" }}>Kanye-West Quote</h1>

      <button >Get Quote</button>
      <button >Add Favorite</button>
    </section>
  );
}
