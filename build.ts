/**
 * Remove old files, copy front-end ones.
 */

import childProcess from 'child_process'
import * as fs from 'node:fs'


/**
 * Start
 */
( async () => {
  try {
    // Remove current build
    await remove( './dist/' )
    // Copy front-end files
    await copy( './src/public', './dist/public' )
    await copy( './src/views', './dist/views' )
    // Copy back-end files
    await exec( 'tsc --build tsconfig.prod.json', './' )
  } catch ( err ) {
    process.exit( 1 )
  }
} )()

/**
 * Remove file
 */
function remove( loc: string ): Promise<void> {
  return new Promise( ( res, rej ) => {
    // @ts-ignore
    return fs.remove( loc, ( err ) => {
      return ( !!err ? rej( err ) : res() )
    } )
  } )
}

/**
 * Copy file.
 */
function copy( src: string, dest: string ): Promise<void> {
  return new Promise( ( res, rej ) => {
    // @ts-ignore
    return fs.copy( src, dest, ( err ) => {
      return ( !!err ? rej( err ) : res() )
    } )
  } )
}

/**
 * Do command line command.
 */
function exec( cmd: string, loc: string ): Promise<void> {
  return new Promise( ( res, rej ) => {
    return childProcess.exec( cmd, { cwd: loc }, ( err, stdout, stderr ) => {
      if ( !!stdout ) {
        console.log( stdout )
      }
      if ( !!stderr ) {
        console.log( stderr )
      }
      return ( !!err ? rej( err ) : res() )
    } )
  } )
}
