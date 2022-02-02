import SavedCard from '../components/SavedCard'

interface SavedProps {}

const Saved: React.FC<SavedProps> = () => {
  const style: any = {
    inner: {
      marginTop: "50px",
    },
  };

  return (
    <div className="mountain-background">
      <div className="mountain-filter">
        <div className="page-container">
          <div className="inner-page" style={style.inner}>
            <SavedCard percentage={1.9} average={0.4}/>
            <SavedCard percentage={0.2} average={0.5}/>
            <SavedCard percentage={2.4} average={1.7}/>
            <SavedCard percentage={1.3} average={1}/>
            <SavedCard percentage={0.9} average={1}/>
            <SavedCard percentage={0.7} average={0.2}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saved;
