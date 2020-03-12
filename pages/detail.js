function Detail() {
  return <span>detail</span>;
}

Detail.getInitialProps = () => {
  // 用返回的promise来代替async
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({});
    }, 1000);
  });
};

export default Detail;
