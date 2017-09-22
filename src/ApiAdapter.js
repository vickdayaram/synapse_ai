import Clarifai from 'clarifai'

const app = new Clarifai.App({
 apiKey: "f519da4396e2433d9fc4b78f69dfd851"
});

export const aiPredict = (url) => {
  app.models.predict(Clarifai.GENERAL_MODEL, url).then(
      function(response) {
      console.log(response)
      },
    );
}
