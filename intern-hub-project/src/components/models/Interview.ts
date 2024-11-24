export class Interview {
  constructor(
    public company: string,
    public position: string,
    public location: { country: string; city: string },
    public compensation: string | null,
    public signOnBonus: string | null,
    public date: string,
    public additionalComments: string,
    public questionTypes: string[],
    public rounds: number,
    public employmentType: string,
    public offer: string
  ) {}
}
