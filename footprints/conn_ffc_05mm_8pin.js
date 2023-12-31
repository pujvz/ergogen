module.exports = {
    params: {
        designator: 'DISP',
        side: 'F',
        VCC: {type: 'net', value: 'VCC'},
        DATA: {type: 'net', value: 'DATA'},
        RESETC: {type: 'net', value: 'RESETC'},
        GND: {type: 'net', value: 'GND'},
        CLK: {type: 'net', value: 'CLK'},
    },
    body: p => `
(module HRS_FH34SRJ-8S-0.5SH_50_ (layer F.Cu) (tedit 6542ED59)
        ${p.at /* parametric position */}
  (descr "")
  (attr smd)
    ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at -0.968 -2.7564 ${p.rot}) (layer ${p.side}.SilkS) ${p.ref_hide}
          (effects (font (size 0.64 0.64) (thickness 0.15)))
        )
  (fp_text value HRS_FH34SRJ-8S-0.5SH_50_ (at 6.7536 2.5436 ${p.rot}) (layer F.Fab)
    (effects (font (size 0.64 0.64) (thickness 0.15)))
  )
  (pad 1 smd rect (at 1.75 -1.25 ${p.rot}) (size 0.3 0.8) (layers F.Cu F.Mask) (solder_mask_margin 0.102) ${p.VCC.str})
  (pad 2 smd rect (at 1.25 -1.25 ${p.rot}) (size 0.3 0.8) (layers F.Cu F.Mask) (solder_mask_margin 0.102) ${p.RESETC.str})
  (pad 3 smd rect (at 0.75 -1.25 ${p.rot}) (size 0.3 0.8) (layers F.Cu F.Mask) (solder_mask_margin 0.102) ${p.GND.str})
  (pad 4 smd rect (at 0.25 -1.25 ${p.rot}) (size 0.3 0.8) (layers F.Cu F.Mask) (solder_mask_margin 0.102) ${p.DATA.str})
  (pad 5 smd rect (at -0.25 -1.25 ${p.rot}) (size 0.3 0.8) (layers F.Cu F.Mask) (solder_mask_margin 0.102) ${p.CLK.str})
  (pad 6 smd rect (at -0.75 -1.25 ${p.rot}) (size 0.3 0.8) (layers F.Cu F.Mask) (solder_mask_margin 0.102))
  (pad 7 smd rect (at -1.25 -1.25 ${p.rot}) (size 0.3 0.8) (layers F.Cu F.Mask) (solder_mask_margin 0.102))
  (pad 8 smd rect (at -1.75 -1.25 ${p.rot}) (size 0.3 0.8) (layers F.Cu F.Mask) (solder_mask_margin 0.102))
  (pad S1 smd rect (at 2.75 1.25 ${p.rot}) (size 0.4 0.8) (layers F.Cu F.Mask F.Paste) (solder_mask_margin 0.102))
  (pad S2 smd rect (at -2.75 1.25 ${p.rot}) (size 0.4 0.8) (layers F.Cu F.Mask F.Paste) (solder_mask_margin 0.102))
  (fp_poly
    (pts
      (xy 0.125 -1.65)
      (xy 0.375 -1.65)
      (xy 0.375 -1.0)
      (xy 0.125 -1.0)
    ) (layer F.Paste) (width 0.01)
  )
  (fp_poly
    (pts
      (xy 0.625 -1.65)
      (xy 0.875 -1.65)
      (xy 0.875 -1.0)
      (xy 0.625 -1.0)
    ) (layer F.Paste) (width 0.01)
  )
  (fp_poly
    (pts
      (xy 1.125 -1.65)
      (xy 1.375 -1.65)
      (xy 1.375 -1.0)
      (xy 1.125 -1.0)
    ) (layer F.Paste) (width 0.01)
  )
  (fp_poly
    (pts
      (xy 1.625 -1.65)
      (xy 1.875 -1.65)
      (xy 1.875 -1.0)
      (xy 1.625 -1.0)
    ) (layer F.Paste) (width 0.01)
  )
  (fp_poly
    (pts
      (xy -0.375 -1.65)
      (xy -0.125 -1.65)
      (xy -0.125 -1.0)
      (xy -0.375 -1.0)
    ) (layer F.Paste) (width 0.01)
  )
  (fp_poly
    (pts
      (xy -0.875 -1.65)
      (xy -0.625 -1.65)
      (xy -0.625 -1.0)
      (xy -0.875 -1.0)
    ) (layer F.Paste) (width 0.01)
  )
  (fp_poly
    (pts
      (xy -1.375 -1.65)
      (xy -1.125 -1.65)
      (xy -1.125 -1.0)
      (xy -1.375 -1.0)
    ) (layer F.Paste) (width 0.01)
  )
  (fp_poly
    (pts
      (xy -1.875 -1.65)
      (xy -1.625 -1.65)
      (xy -1.625 -1.0)
      (xy -1.875 -1.0)
    ) (layer F.Paste) (width 0.01)
  )
  (fp_line (start -3.0 -1.1) (end 3.0 -1.1) (layer F.Fab) (width 0.127))
  (fp_line (start 3.0 -1.1) (end 3.0 1.8) (layer F.Fab) (width 0.127))
  (fp_line (start 3.0 1.8) (end -3.0 1.8) (layer F.Fab) (width 0.127))
  (fp_line (start -3.0 1.8) (end -3.0 -1.1) (layer F.Fab) (width 0.127))
  (fp_line (start -3.0 -1.1) (end -3.0 -2.0) (layer F.Fab) (width 0.127))
  (fp_line (start -3.0 -2.0) (end 3.0 -2.0) (layer F.Fab) (width 0.127))
  (fp_line (start 3.0 -2.0) (end 3.0 -1.1) (layer F.Fab) (width 0.127))
  (fp_line (start -2.22 -1.1) (end -3.0 -1.1) (layer F.SilkS) (width 0.127))
  (fp_line (start -3.0 -1.1) (end -3.0 0.53) (layer F.SilkS) (width 0.127))
  (fp_line (start 2.22 -1.1) (end 3.0 -1.1) (layer F.SilkS) (width 0.127))
  (fp_line (start 3.0 -1.1) (end 3.0 0.53) (layer F.SilkS) (width 0.127))
  (fp_line (start -2.23 1.8) (end 2.23 1.8) (layer F.SilkS) (width 0.127))
  (fp_line (start -3.25 -2.25) (end -3.25 2.05) (layer F.CrtYd) (width 0.05))
  (fp_line (start -3.25 2.05) (end 3.25 2.05) (layer F.CrtYd) (width 0.05))
  (fp_line (start 3.25 2.05) (end 3.25 -2.25) (layer F.CrtYd) (width 0.05))
  (fp_line (start 3.25 -2.25) (end -3.25 -2.25) (layer F.CrtYd) (width 0.05))
  (fp_circle (center 1.75 -2.55) (end 1.85 -2.55) (layer F.SilkS) (width 0.2))
  (fp_circle (center 1.75 -2.55) (end 1.85 -2.55) (layer F.Fab) (width 0.2))
)
        `
}
