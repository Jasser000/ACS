export interface Menu{
    id: string;
    title?: string;
    icon?: string;
    url?: string;
    subMenu?: Array<Menu> ;
}