import { useEffect, useState } from "react";

const useImage = (fileName: string) => {
    const [loading, setLoading] = useState(true);
    const [image, setImage] = useState();

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../media/${fileName}`);
                setImage(response.default);
            } finally {
                setLoading(false);
            }
        }
        fetchImage();
    }, [fileName])

    return {
        loading,
        image
    }
}

export default useImage;