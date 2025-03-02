const OpenWebsite = () => {
  const openExternalWebpage = () => {
    const url = "https://www.adcb.com";
    window.open(url, "_blank");
  };

  return (
    <div>
      <button onClick={openExternalWebpage}>Open</button>
    </div>
  );
};

export default OpenWebsite;
