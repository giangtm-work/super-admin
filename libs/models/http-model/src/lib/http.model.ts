/**
 * Interface of the simple literal object with any string keys.
 */
export interface ObjectLiteral {
  [key: string]: any;
}

export interface UpdateResult {
  /**
   * Raw SQL result returned by executed query.
   */
  raw: any;
  /**
   * Number of affected rows/documents
   * Not all drivers support this
   */
  affected?: number;
  /**
   * Contains inserted entity id.
   * Has entity-like structure (not just column database name and values).
   */
  /**
   * Generated values returned by a database.
   * Has entity-like structure (not just column database name and values).
   */
  generatedMaps: ObjectLiteral[];
}

export interface DeleteResult {
  /**
   * Raw SQL result returned by executed query.
   */
  raw: any;
  /**
   * Number of affected rows/documents
   * Not all drivers support this
   */
  affected?: number | null;
}