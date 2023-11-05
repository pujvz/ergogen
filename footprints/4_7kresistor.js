module.exports = {
    params: {
        designator: 'DISP',
        side: 'F',
        PAD1: {type: 'net', value: 'PAD1'},
        PAD2: {type: 'net', value: 'PAD2'},
    },
    body: p => `
    (module RES_ERJ2RKF4701X (layer F.Cu) (tedit 6545DBA2)
        ${p.at /* parametric position */}
  (descr "")
  (attr smd)
    ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 1.032 -1.1564 ${p.rot}) (layer ${p.side}.SilkS) ${p.ref_hide}
          (effects (font (size 0.64 0.64) (thickness 0.15)))
        )
  (fp_text value RES_ERJ2RKF4701X (at 5.5024 1.1564 ${p.rot}) (layer F.Fab)
    (effects (font (size 0.64 0.64) (thickness 0.15)))
  )
  (pad 1 smd rect (at -0.512 0.0 ${p.rot}) (size 0.475 0.5) (layers F.Cu F.Mask F.Paste) (solder_mask_margin 0.102) ${p.PAD1.str})
  (pad 2 smd rect (at 0.512 0.0 ${p.rot}) (size 0.475 0.5) (layers F.Cu F.Mask F.Paste) (solder_mask_margin 0.102) ${p.PAD2.str})
  (fp_line (start -0.5 -0.25) (end -0.5 0.25) (layer F.Fab) (width 0.127))
  (fp_line (start 0.5 -0.25) (end 0.5 0.25) (layer F.Fab) (width 0.127))
  (fp_line (start -0.5 -0.25) (end 0.5 -0.25) (layer F.Fab) (width 0.127))
  (fp_line (start -0.5 0.25) (end 0.5 0.25) (layer F.Fab) (width 0.127))
  (fp_line (start -1.0 -0.5) (end -1.0 0.5) (layer F.CrtYd) (width 0.05))
  (fp_line (start -1.0 0.5) (end 1.0 0.5) (layer F.CrtYd) (width 0.05))
  (fp_line (start 1.0 0.5) (end 1.0 -0.5) (layer F.CrtYd) (width 0.05))
  (fp_line (start 1.0 -0.5) (end -1.0 -0.5) (layer F.CrtYd) (width 0.05))
)
        `
}

