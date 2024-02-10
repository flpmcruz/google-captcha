# google-captcha function to verify the captcha response

```js
import captchaVerify from "google-captcha";

const CAPTCHA = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
const SECRET_KEY = "6LeVRqyHh71VRqyHh71VRqyHh71VRqyHh71";
const SCORE = 0.5;

const result = captchaVerify({
  captcha: CAPTCHA,
  secretKey: SECRET_KEY,
  score: SCORE,
});
```
