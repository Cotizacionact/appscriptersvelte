// Generated by Xata Codegen 0.28.0. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  { name: "Articles", columns: [] },
  {
    name: "Users",
    columns: [
      { name: "username", type: "string", unique: true },
      { name: "password", type: "string" },
      { name: "email", type: "email" },
      { name: "verified", type: "bool", defaultValue: "false" },
      { name: "Bio", type: "text" },
      { name: "profile_image", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type Articles = InferredTypes["Articles"];
export type ArticlesRecord = Articles & XataRecord;

export type Users = InferredTypes["Users"];
export type UsersRecord = Users & XataRecord;

export type DatabaseSchema = {
  Articles: ArticlesRecord;
  Users: UsersRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL:
    "https://Cotizacionact-s-workspace-rgc5kh.us-east-1.xata.sh/db/appscriptersvelte",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};