const Background = ({ children }) => {

  return (
    <>
    {/* <section className="backdrop"></section> */}
    <section className="layout1"></section>
    <section className="layout2"></section>
    <section className="container">
        {children}
    </section>
    </>

  )
};

export default Background ;
