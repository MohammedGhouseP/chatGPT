import OpenAI from 'openai';

const client = new OpenAI({

  apiKey: "",
  dangerouslyAllowBrowser: true 
});

// send a message to OpenAI and get a response
export async function sendMessage(prompt) {
  try {
    const res = await client.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });
    return res.choices[0].message.content;
  } catch (error) {
    console.error("Error creating completion:", error);
    throw error;
  }
}

export async function sendFile(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    //  Sending the file to backend
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("File upload failed");
    }

    const data = await response.json();
    // console.log("Data",data.message)
    return data.message; // backend returns a response of image url
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}