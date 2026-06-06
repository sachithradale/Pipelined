export type Database = {
  public: {
    Tables: {
      applications: {
        Row: {
          id: string;
          company: string;
          role: string;
          url: string;
          status: "APPLIED" | "INTERVIEW" | "OFFER" | "REJECTED";
          notes: string;
          applied_date: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          company: string;
          role: string;
          url: string;
          status?: "APPLIED" | "INTERVIEW" | "OFFER" | "REJECTED";
          notes?: string;
          applied_date: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          company?: string;
          role?: string;
          url?: string;
          status?: "APPLIED" | "INTERVIEW" | "OFFER" | "REJECTED";
          notes?: string;
          applied_date?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
