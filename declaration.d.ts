declare module "Tenders.module.scss";


declare module "*.module.scss" { 
  const content: { [className: string]: string };
    export default content;
}
