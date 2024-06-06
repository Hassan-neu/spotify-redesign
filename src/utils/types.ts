export type NavLink = {
    id: number;
    icon: string;
    label: string;
    href: string;
    btnFunc?: (action: Function) => Function;
};
export type SideMenu = NavLink & {
    collapsible?: boolean;
    subMenu?: SideMenu[];
};
