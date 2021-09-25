// this fix the issue where the import of dotenv variables was throwing a ts error
// https://github.com/goatandsheep/react-native-dotenv/issues/52#issuecomment-673218479
declare module '@env' {
  export const API_KEY: string;
}
