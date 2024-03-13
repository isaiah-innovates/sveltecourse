import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
import pkg from "firebase-admin";
const FB_PROJECT_ID = "sveltecourse-21d6d";
const FB_CLIENT_EMAIL = "firebase-adminsdk-yn2fq@sveltecourse-21d6d.iam.gserviceaccount.com";
const FB_PRIVATE_KEY = 'private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCotcODGRBdKBrj\n+sYps89YUhLJ761ZX5VSE54hMko+VAi6KWwCqxKkUPNLSUL8dNImwcT27KEM4dmy\nnfgvM/lp1mxrZbBZIdbbOcyQFk6kbSwwO3PmwcFQ2HXRqeKWjvruYFsZXRBxfLoV\nNi8wxdjuOVswi2Wx0V8jWzekkXFNnNzWwdtNvNBvl1waG66WAHTkwzSOvzfjmvmp\ndMoHby6+iJtgzpu4GZwqPvr/cFATFjhFHnWTf/0VAjmlkkGGajlnrEFSM+Tfqzso\ndWA+2yTP30J6HclZfuAtlZfwDYgwky4hq6UUcSjrXByxbA7StSjpu5UqJX2Wrwy6\nBpaow85hAgMBAAECggEAGdqU8L5YCsvuZwPTTKkQps/Dr6zU9gPBqGzM3aMidoUT\n5fdwD8PzR46yN1YtokOCwEwPKOn1T489eHO13gH11aQgREsL6HTY7gqK+y+38yxZ\nymBqBVxUNCqfz4wHEcctKXecWPmGihBbnIw2VMqU+64ld9MnjUWbx0QfdaQ7kUbZ\n8w4UuC5Bw1ZBScTPcHEIxsfTdAnNiRphOYwmri55w9I24tnO2hl2ivh4yanhvqR0\n3JNajHdxTaoQa5QjpLL2GRK++mzxLXklMGRlOL7dejzhOoSmyFcXt6pT/MLCrRD2\n6Ie/okoNfAHuYMr7Uavj5Dmx4T/uda1YDx9Lj0jGCwKBgQDeLNAnap6HIhqCUcDz\nP05BY0eojDjCUd1VmCLDPM8PCsGrHuzqAdTR209RRP25WLutc3GHRoJ3qn1goRB0\nDicggIM4UOkTDfxpAE/LoZy8pbDZ4Oecy//j1WzXlM5//1N3LaCkqMw9MIgEN+LU\nzcoBFK4jKaGaRJPOeu8bZyU6SwKBgQDCZSvjqD7eQmluwyxWyGYmi2vL8TGrU2cp\nfP5CvEVJlmNAHaJZxzhScYaUCYJI0TaKtTBxdJkC9tYKJEHtdrv501iHuVt7sM0U\n9fjN80hvjeJ6pMutgsw0w5tTLSdvJGyBY/g8oY4UPpwKtW2kxYP0H3W0gbqIeu8A\n59w6ykiugwKBgQC0uKUU+vA6oa4IhXG7K6p/G7/FRVJCFo9AucDFKSiQZsKEbGJw\nMs8naQpK5CCy7I+1FmupitxDdMYJnNoiXQTMtlyGqaH9YuoHiz5dOHejJ/AEOqKL\n85CRhiDD94JFsa32CoJajgecWma5b7AuQ7rmSCkh5xJRxyin0229z5gDowKBgFDs\ncPLajSFVIDLdyM1vqyaMj5lclMKve5iH0gjR+z4A/twn+ffJuSaI3+8sbjIF9eCU\nQNBaK4BSZRPfuBo0fVgopQgLH4xEM3twUdzaU+Mse4V2qNtYQc4NR9G+UFYyIYFT\nrnj+//hpf+ftUvFuz9mGZyd3gcFi+6+y1bkbkFolAoGBAJmmcfo5Eim7gbtQGinO\nA6QXgZTpQFWk7cBC0lDUNJDxHNmNjPt2Gwnjx8yD6yGgpXB5pFEjwMgnBt9SuNOa\n8HvOvnkFselM6ZIS6vwu0IdgdYfkMrASU0ZvfnCo29keraMi6gxn8OQ0gE7vO3Pq\nYseXSH+wyaQePAMNh0bN5UC/\n-----END PRIVATE KEY-----\n';
try {
  pkg.initializeApp({
    credential: pkg.credential.cert({
      projectId: FB_PROJECT_ID,
      clientEmail: FB_CLIENT_EMAIL,
      privateKey: FB_PRIVATE_KEY
    })
  });
} catch (err) {
  if (!/already exists/u.test(err.message)) {
    console.error("Firebase Admin Error: ", err.stack);
  }
}
const adminDB = getFirestore();
const adminAuth = getAuth();
export {
  adminAuth as a,
  adminDB as b
};
