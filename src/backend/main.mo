actor {
  let schoolName = "Happy Hearts Pre Primary School";
  let tagline = "Nurturing young minds with love, care and joyful learning!";

  public shared ({ caller }) func getSchoolInfo() : async Text {
    schoolName # " - " # tagline;
  };
};
