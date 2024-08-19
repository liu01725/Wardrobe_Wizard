import { useState } from "react";
import "./Upload.css";
import { Link } from "react-router-dom";

const App = () => {
  const [selectedImage, setSelectedImage] = useState();

  // This function will be triggered when the file field change
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  // This function will be triggered when the "Remove This Image" button is clicked
  const removeSelectedImage = () => {
    setSelectedImage();
  };

  function handleSubmit(e) {
    e.preventDefault();    
    console.log('You clicked submit.');
    const data = new FormData(e.target);

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div style={styles.container}>
            <h3 className="uploadhead">Upload Image:</h3><br/><br/><br/>
          <label className="inputflex">
            Type:  
            <input className="form-input"/>
            Style:
            <input className="form-input"/>
            Colour:
            <input className="form-input"/>
            Fit:
            <input className="form-input"/>
            Brand:
            <input className="form-input"/>
            Other Tags:
            <input className="form-input"/>
          </label>
          <label>
            <input
                accept="image/*"
                type="file"
                onChange={imageChange}
              />
          </label>
          
          {selectedImage && (
            <div style={styles.preview}>
              <img
                src={URL.createObjectURL(selectedImage)}
                style={styles.image}
                alt="Thumb"
              />
              <button onClick={removeSelectedImage} style={styles.delete}>
                Remove This Image
              </button>
            </div>
          )}
        </div><br/>
        <Link to="/thanks">
        <button type="submit" className="submitbutton">Submit!</button>
        </Link>
      </form>
      
    </>
  );
};

export default App;

// Just some styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  preview: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
  },
  image: { maxWidth: "100%", maxHeight: 320 },
  delete: {
    cursor: "pointer",
    padding: 15,
    background: "red",
    color: "white",
    border: "none",
  },
};

// import React, { Component } from 'react'
// import DragAndDrop from './DragAndDrop'
// import "./Upload.css"


// class UploadList extends Component {
//   <div className="center">
//     <div className="form-input">


//     </div>
//   </div> 
// //   state = {
// //       files: [
// //       ]
// //     }
// //   handleDrop = (files) => {
// //       let uploadList = this.state.files
// //       if (files == [""]) {
// //         <div>upload here!</div>
// //       }
// //       for (var i = 0; i < files.length; i++) {
// //         if (!files[i].name) return
// //         uploadList.push(files[i].name)
// //       }
// //       this.setState({files: uploadList})
// //     }
// //   render() {
// //       return (
// //         <DragAndDrop handleDrop={this.handleDrop}>
// //           <div className="dragdrop">
// //             {this.state.files.map((file) =>
// //               <div>{file}</div>
// //             )}
// //             <h3>Drag and Drop Here!</h3>
// //           </div>
// //         </DragAndDrop>
// //       )
// //     }
// }
// export default UploadList
