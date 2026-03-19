import UploadClient from 'uploadcare';

const connectUploadCare = async () => {
    const uploadClient = new UploadClient({
        publicKey: process.env.UPLOADCARE_PUBLIC_KEY,
        secretKey: process.env.UPLOADCARE_SECRET_KEY
    });
    return uploadClient;
}
export default connectUploadCare;