import axios from "axios";

type Props = {
  captcha: string;
  recaptcha_key: string;
  score?: number;
};

const checkCaptcha = async ({
  captcha,
  recaptcha_key,
  score = 0.5,
}: Props): Promise<boolean> => {
  if (!captcha) return false;
  try {
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptcha_key}&response=${captcha}`;

    const { data } = await axios.get(verifyUrl);
    if (!data.success || data.score < score) return false;

    return true;
  } catch (error) {
    return false;
  }
};

export default checkCaptcha;
