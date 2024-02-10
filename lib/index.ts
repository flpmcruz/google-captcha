import axios from "axios";

type Props = {
  captcha: string;
  recaptcha_key: string;
  score?: number;
};

/**
 * Check if the captcha is valid
 * @param {string} captcha - The captcha response token from the client
 * @param {string} recaptcha_key - The recaptcha secret key
 * @param {number} score - The minimum score required to pass the captcha (default: 0.5 if not provided)
 */
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
