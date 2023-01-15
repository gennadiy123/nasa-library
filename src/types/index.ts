export type TDataItem = {
  data: [
    {
      center: string;
      date_created: string;
      description: string;
      description_508: string;
      keywords: string[];
      mediatype: string;
      nasa_id: string;
      secondary_creator: string;
      title: string;
    }
  ];
  href: string;
  links: [
    {
      href: string;
      rel: string;
      render: string;
    }
  ];
};

export type TData = TDataItem[];