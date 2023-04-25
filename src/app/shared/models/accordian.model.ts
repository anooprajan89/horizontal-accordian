export interface AccordianModel {
    title: string;
    count: number;
    isExpanded: boolean;
    widget: WidgetModel[]
}

export interface WidgetModel {
    title: string;
}