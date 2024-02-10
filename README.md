# google-captcha function to verify the captcha response

```js
import captchaVerify from "google-captcha";

const CAPTCHA = "yourcaptcharesponse";
const SECRET_KEY = "yoursecretkey";
const SCORE = 0.5;

const result = captchaVerify({
  captcha: CAPTCHA,
  secretKey: SECRET_KEY,
  score: SCORE,
});
```
