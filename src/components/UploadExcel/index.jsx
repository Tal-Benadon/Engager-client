import { useState } from 'react';
import api from '../../functions/api';
import styles from './style.module.css'
import { FaUpload } from "react-icons/fa";

export default function UploadExcel({ setPopUp,  getCamp, campId }) {
   const [file, setFile] = useState(null);
   const [isUploading, setIsUploading] = useState(false);
   const [uploadStatus, setUploadStatus] = useState('');

   const handleFileChange = (e) => setFile(e.target.files[0]);

   const handleUpload = async () => {
      if (!file) return setUploadStatus('Please select a file');

      setIsUploading(true);
      setUploadStatus('Uploading...');

      const formData = new FormData();
      formData.append('file', file);

      try {
         const response = await api.post(`files/upload/leads/${campId}`, formData,
            { 'Content-Type': 'multipart/form-data' }
         )

         setUploadStatus(response.msg);
         getCamp()
         setPopUp(false)
      } catch (err) {
         setUploadStatus('Error uploading file');
         console.error('Error uploading leads:', err);
      } finally {
         setIsUploading(false);
      }
   };

   return (
      <div className={styles.UploadExcel}>
         <label >
            לחץ כאן להעלאת קבצים
            <FaUpload />
            <input type="file" onChange={handleFileChange} accept=".xlsx,.xls" />
         </label>
         {file && <p className={styles.fileName}>{file.name}</p>}
         <button onClick={handleUpload} disabled={isUploading}>
            {isUploading ? 'מעלה...' : 'העלה'}
         </button>
         <p>{uploadStatus}</p>
      </div>
   )
}
