export default ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-supabase-v4",
      providerOptions: {
        apiUrl: process.env.SUPABASE_API_URL,
        apiKey: process.env.SUPABASE_API_KEY,
        bucket: process.env.SUPABASE_BUCKET,
        directory: process.env.SUPABASE_DIRECTORY,
        options: {},
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
