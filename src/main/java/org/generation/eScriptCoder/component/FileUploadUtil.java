package org.generation.eScriptCoder.component;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

/*
 * Azure Blob Storage quickstart
 */
import com.azure.storage.blob.*;
import com.azure.storage.blob.models.*;

public class FileUploadUtil {

    public static void saveFile(String uploadDir1, String fileName,
                                MultipartFile multipartFile) throws IOException {
//        local storage
        Path uploadPath1 = Paths.get(uploadDir1);
        try (InputStream inputStream = multipartFile.getInputStream()) {


            Path filePath1 = uploadPath1.resolve(fileName);
            Files.copy(inputStream, filePath1, StandardCopyOption.REPLACE_EXISTING);

        } catch (IOException ioe) {
            throw new IOException("Could not save image file: " + fileName, ioe);
        }


        //Actual upload of images to Azure. Will work in local but need to pay.
        /* This is the setup using Azure storage */

//        String connectStr2 = "DefaultEndpointsProtocol=https;AccountName=soohuaproductimages;AccountKey=l1Da2TH0WCT2FDhW5fM0OSSAMl6nsfK09UdWVO8PksHFTBP8wpZxjDxF/7zBcBA68pD2gEUw8NbT+AStgxKDfA==;EndpointSuffix=core.windows.net";
//
//        //create a connection between application and storage container that we have created in our Azure server
//        BlobServiceClient blobServiceClient = new BlobServiceClientBuilder().connectionString(connectStr2).buildClient();
//        //specify which container we want to get the image from.
//        String containerName = "prodimage";
//
//        //To get the container with the images
//        BlobContainerClient containerClient = blobServiceClient.getBlobContainerClient(containerName);
//
//        //file name refers to which image filename that we want to upload to the container.(eg. t-shirt_new.jpg)
//
//        BlobClient blobClient = containerClient.getBlobClient(fileName);
//
//
//        InputStream inputStream = multipartFile.getInputStream();
//        blobClient.upload(inputStream);



    }


}
